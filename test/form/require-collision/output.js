import 'foo';
import require$$1 from 'commonjs-proxy:foo';

(function() {
  var foo = require$$1;
  var require$$0 = "FAIL";
  console.log(foo);
})();

var input = {

};

export default input;
export { input as __moduleExports };
