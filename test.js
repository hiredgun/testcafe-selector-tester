import { t, Selector } from 'testcafe';

fixture('Test selector').page('http://localhost:5000/index.html');

test(`test`, async t => {
    console.log('foo');
    console.log(await Selector('label span').withExactText('title').count);
    await t.typeText(
        Selector('label span')
            .withExactText('title')
            .parent(),
        'foo',
        { replace: true }
    );
});
