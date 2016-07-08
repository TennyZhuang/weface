(() => {
  String.prototype.replaceAll = function(target, replacement) {
    return this.split(target).join(replacement);
  };

  const WECHAT_FACE_MAP = new Map([
    ['/::)', '1'],
    ['/::~', '2'],
    ['/::B', '3'],
    ['/::|', '4'],
    ['/:8-)', '5'],
    ['/::<', '6'],
    ['/::$', '7'],
    ['/::X', '8'],
    ['/::Z', '9'],
    ['/::\'(', '10'],
    ['/::-|', '11'],
    ['/::@', '12'],
    ['/::P', '13'],
    ['/::D', '14'],
    ['/::O', '15'],
    ['/::(', '16'],
    ['/::+', '17'],
    ['/:--b', '18'],
    ['/::Q', '19'],
    ['/::T', '20'],
    ['/:,@P', '21'],
    ['/:,@-D', '22'],
    ['/::d', '23'],
    ['/:,@o', '24'],
    ['/::g', '25'],
    ['/:|-)', '26'],
    ['/::!', '27'],
    ['/::L', '28'],
    ['/::>', '29'],
    ['/::,@', '30'],
    ['/:,@f', '31'],
    ['/::-S', '32'],
    ['/:?', '33'],
    ['/:,@x', '34'],
    ['/:,@@', '35'],
    ['/::8', '36'],
    ['/:,@!', '37'],
    ['/:!!!', '38'],
    ['/:xx', '39'],
    ['/:bye', '40'],
    ['/:wipe', '41'],
    ['/:dig', '42'],
    ['/:handclap', '43'],
    ['/:&-(', '44'],
    ['/:B-)', '45'],
    ['/:<@', '46'],
    ['/:@>', '47'],
    ['/::-O', '48'],
    ['/:>-|', '49'],
    ['/:P-(', '50'],
    ['/::\'|', '51'],
    ['/:X-)', '52'],
    ['/::*', '53'],
    ['/:@x', '54'],
    ['/:8*', '55'],
    ['/:pd', '56'],
    ['/:<W>', '57'],
    ['/:beer', '58'],
    ['/:basketb', '59'],
    ['/:oo', '60'],
    ['/:coffee', '61'],
    ['/:eat', '62'],
    ['/:pig', '63'],
    ['/:rose', '64'],
    ['/:fade', '65'],
    ['/:showlove', '66'],
    ['/:heart', '67'],
    ['/:break', '68'],
    ['/:cake', '69'],
    ['/:li', '70'],
    ['/:bome', '71'],
    ['/:kn', '72'],
    ['/:footb', '73'],
    ['/:ladybug', '74'],
    ['/:shit', '75'],
    ['/:moon', '76'],
    ['/:sun', '77'],
    ['/:gift', '78'],
    ['/:hug', '79'],
    ['/:strong', '80'],
    ['/:weak', '81'],
    ['/:share', '82'],
    ['/:v', '83'],
    ['/:@)', '84'],
    ['/:jj', '85'],
    ['/:@@', '86'],
    ['/:bad', '87'],
    ['/:lvu', '88'],
    ['/:no', '89'],
    ['/:ok', '90'],
    ['/:love', '91'],
    ['/:<L>', '92'],
    ['/:jump', '93'],
    ['/:shake', '94'],
    ['/:<O>', '95'],
    ['/:circle', '96'],
    ['/:kotow', '97'],
    ['/:turn', '98'],
    ['/:skip', '99'],
    ['/:oY', '100'],
    ['/:#-0', '101'],
    ['/:hiphot', '102'],
    ['/:kiss', '103'],
    ['/:<&', '104'],
    ['/:&>', '105'],
  ]);

  const ENTITY_MAP = new Map([
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;']
  ]);

  const ESCAPED_WECHAT_FACE_MAP = new Map(Array.from(WECHAT_FACE_MAP).map((entry) => {
    return [entry[0].replace(/[&<>]/g, s => ENTITY_MAP.get(s)), entry[1]];
  }));

  class Weface {
    constructor(options = {}) {
      this.faceMap = (options.escaped === true) ? ESCAPED_WECHAT_FACE_MAP : WECHAT_FACE_MAP;
    }

    compile(message) {
      this.faceMap.forEach((value, key) => {
        message = message.replaceAll(key,
          `<div class="wechatface wechatface-${value}"></div>`);
      });

      return message;
    }
  }
  window.Weface = Weface;
})();
