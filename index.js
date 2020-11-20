import { fromEvent } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!'),
};

const source$ = fromEvent(document, 'keyup');

const sub1 = source$.subscribe(observer);
const sub2 = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsubscribing');
  sub1.unsubscribe();
}, 3000);
