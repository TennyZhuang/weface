import '../src/weface';
import assert from 'assert';

describe('Weface', () => {
  describe('#compile()', () => {
    it('should compile unescaped face correctly', () => {
      const weface = new Weface();
      const result = weface.compile('123/:bye');
      assert.strictEqual(result,
        '123<div class="wechatface wechatface-40"></div>');
    });

    it('should compile escaped face correctly', () => {
      const weface = new Weface({
        escaped: true
      });

      const result = weface.compile('/:@&gt;123');
      assert.strictEqual(result,
        '<div class="wechatface wechatface-47"></div>123');
    });
  });
});
