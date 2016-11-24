import 'babel-polyfill';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'web-animations-js';
import './webkit-audio-context-monkeypatch';
require('stereo-panner-node').polyfill();

require('rxjs/add/operator/filter');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/bufferTime');
require('rxjs/add/operator/toArray');
require('rxjs/add/observable/interval');
