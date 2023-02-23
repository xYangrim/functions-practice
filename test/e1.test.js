import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e1";

const name = "Andrey";
const age = 18;
const message = 'Here is my first output ever!'

describe('logMessage', () => {
    it('The test function should exist', () => {
        expect(f.logMessage).instanceOf(Function);
    });

    it('The function logs a message in console', async () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessage();
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith('Hello, World!');
    });

    it('The function returns undefined', async () => {
        expect(f.logMessage()).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMessage).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMyMessage', () => {
    it('The test function should exist', () => {
        expect(f.logMyMessage).instanceOf(Function);
    });

    it('The function logs a message passed as argument in console', () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMyMessage(message);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(message);
    });

    it('The function returns undefined', async () => {
        expect(f.logMyMessage(message)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMyMessage).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMessageWithMyName', () => {
    it('The test function should exist', () => {
        expect(f.logMessageWithMyName).instanceOf(Function);
    });

    it('The function logs a message using the argument passed', () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessageWithMyName(name);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(`My name is ${name}!`);
    });

    it('The function returns undefined', async () => {
        expect(f.logMessageWithMyName(name)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMessageWithMyName).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMyInfo', () => {
    it('The test function should exist', () => {
        expect(f.logMyInfo).instanceOf(Function);
    });

    it('The function logs a message using two arguments passed', () => {
        const logSpy = vitest.spyOn(console, 'log');
        const testStart = 'My name is';
        const testName = ` ${name}`;
        const testMiddle = '. I am';
        const testAge = ` ${age} `;
        const testEnd = 'years old!'
        f.logMyInfo(name, age);
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith(`${testStart + testName + testMiddle + testAge + testEnd}`);
    });

    it('The function returns undefined', async () => {
        expect(f.logMyInfo(name, age)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMyInfo).hasOwnProperty('prototype')).toEqual(true);
    });
})
