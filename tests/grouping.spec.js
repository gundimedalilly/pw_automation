import {test, expect, chromium } from '@playwright/test';
test.beforeAll(async()=>{
    console.log("before all hook");
})

test.afterAll(async()=>{
    console.log("after all hook");
})
test.beforeEach(async()=>{
    console.log("before each hook test");
})
test.afterEach(async()=>{
    console.log("after each test hook");
})
test.describe.skip('grouping test',()=> {
test('group_tests1', async({page})=>{
    console.log("frst test");
});
test('grptest2', async({page})=>{
    console.log("secnd test");
    })
})

test.describe('group2',()=>{
    test('grptest3', async({page})=>{
        console.log("third test");
        })
        test('grptest4', async({page})=>{
            console.log("fourth test");
            })
        })