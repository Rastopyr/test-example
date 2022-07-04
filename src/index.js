import { makeObservable, observable, computed, action } from "mobx";
import React from "react";

export const HelloWorld = ({ title }) => {
  return (
    <div>
      <h1>Hello, {title}!</h1>
    </div>
  );
};

export class DoublerCanonical {
  value;

  constructor(value) {
    this.value = value;

    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action
    });
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}
