import { Readable } from 'stream';

var stream = new Readable({ objectMode: true});

store.dispatch(stream);