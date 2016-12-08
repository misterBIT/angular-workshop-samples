import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Remote} from './remote.service';

@Injectable()
export class Random {

  constructor(private rmt:Remote) { }

  nextInt(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min));
  }

  element<T>(array:T[]) {
    return array[this.nextInt(0, array.length)];
  }

  sampler<T>(array:T[]) {
    let previous:T;
    return () => {
      const options = array.slice(0).filter((x) => x !== previous)
      return previous = this.element(options);
    }
  }

  markovProcess(minDelay, maxDelay) {
    return Observable.create((observer) => {
      let running = true;
      let next = () => {
        if (running) {
          observer.next();
          setTimeout(next, this.nextInt(minDelay, maxDelay));
        }
      };
      next();

      return () => running = false;
    });
  }

  randomWalk(startStep, minChange, maxChange) {
    return Observable.create((observer) => {
      let running = true;
      let step = startStep;
      let next = () => {
        if (running) {
          step += this.nextInt(minChange, maxChange);
          observer.next();
          setTimeout(next, step);
        }
      };
      next();

      return () => running = false;
    });
  }

  constrainedRandomWalk(startStep, minStep, maxStep, minChange, maxChange) {
    return Observable.create((observer) => {
      let running = true;
      let step = startStep;
      (async () => {
        while (running) {
          step += this.nextInt(minChange, maxChange);
          step = Math.min(step, maxStep);
          step = Math.max(step, minStep);
          observer.next();
          await this.sleep(step);
        }
      })();
      return () => running = false;
    });
  }

  randomWalkInterp(min, max, stepsPerInterval) {
    return Observable.create((observer) => {
      let running     = true;
      let current     = this.nextInt(min, max);
      let next        = this.nextInt(min, max);
      let step        = 0;
      (async () => {
        while (running) {
          const diff         = next - current;
          const stepFraction = step / stepsPerInterval;
          const val          = current + stepFraction * diff;

          observer.next();
          await this.sleep(val);

          step++;
          if (step === stepsPerInterval) {
            current = next;
            next = this.nextInt(min, max);
            step = 0;
          }
        }
      })();
      return () => running = false;
    });
  }

  noise(x) {
    x = (x << 13) ^ x;
    return (1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0);
  }

  linearInterpolate(a, b, x) {
    return a * (1 - x) + b * x;
  }

  cosineInterpolate(a, b, x) {
    const ft = x * Math.PI;
    const f = (1 - Math.cos(ft)) * .5;
    return a * (1 - f) + b * f;
  }

  interpolatedNoise(x) {
    const xFloor = Math.floor(x);
    const xFraction = x - xFloor;
    const v1 = this.noise(xFloor);
    const v2 = this.noise(xFloor + 1);
    return this.cosineInterpolate(v1, v2, xFraction);
  }

  perlinNoise(initialDelay, sleepTime = 200, adjust = 5) {
    const persistence     = 1/2;
    const numberOfOctaves = 4;
    return Observable.create((observer) => {
      let running = true;

      let x = Math.random();
      let nextNoise = async () => {
        await this.sleep(initialDelay);
        while (running) {
          let total = 0;
          for (let i=0 ; i < numberOfOctaves - 1 ; i++) {
            const frequency = 2 ** i;
            const amplitude = persistence ** i;
            total = total + this.interpolatedNoise(x * frequency) * amplitude;
          }
          const probability = (total + 1) / adjust;
          const yes = (Math.random() < probability);
          if (yes) {
            observer.next();
          }
          await this.sleep(sleepTime);
          x += 0.2;
        }
      };
      nextNoise();
      return () => running = false;
    });
  }

  simpleCurve(samplesPerStep = 10) {
    return Observable.interval(100)
      .map(i => i / samplesPerStep)
      .map(step => this.interpolatedNoise(step))
  }

  remote() {
    return this.rmt.chimes();
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
