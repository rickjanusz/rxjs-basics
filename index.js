import { Observable, Subscription } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const observer = {
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete!'),
};

const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);
  return () => {
    clearInterval(id);
    console.log('called');
  };
});

// console.log('before');
const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

// console.log('after');
setTimeout(() => {
  subscription.unsubscribe();
}, 3500);
