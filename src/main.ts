import { OpenCC } from 'opencc'

const converter: OpenCC = new OpenCC('s2t.json')

async function main() {
    const result: string = await converter.convertPromise("韩总");
    console.log('result', result);
}

main();
