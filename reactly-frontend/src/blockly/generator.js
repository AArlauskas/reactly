import Blockly from "blockly";

Blockly.React = new Blockly.Generator("React");

Blockly.React.INDENT = "  ";

Blockly.React.ORDER_ATOMIC = 0; // 0 "" ...
Blockly.React.ORDER_NEW = 1.1; // new
Blockly.React.ORDER_MEMBER = 1.2; // . []
Blockly.React.ORDER_FUNCTION_CALL = 2; // ()
Blockly.React.ORDER_INCREMENT = 3; // ++
Blockly.React.ORDER_DECREMENT = 3; // --
Blockly.React.ORDER_BITWISE_NOT = 4.1; // ~
Blockly.React.ORDER_UNARY_PLUS = 4.2; // +
Blockly.React.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.React.ORDER_LOGICAL_NOT = 4.4; // !
Blockly.React.ORDER_TYPEOF = 4.5; // typeof
Blockly.React.ORDER_VOID = 4.6; // void
Blockly.React.ORDER_DELETE = 4.7; // delete
Blockly.React.ORDER_AWAIT = 4.8; // await
Blockly.React.ORDER_EXPONENTIATION = 5.0; // **
Blockly.React.ORDER_MULTIPLICATION = 5.1; // *
Blockly.React.ORDER_DIVISION = 5.2; // /
Blockly.React.ORDER_MODULUS = 5.3; // %
Blockly.React.ORDER_SUBTRACTION = 6.1; // -
Blockly.React.ORDER_ADDITION = 6.2; // +
Blockly.React.ORDER_BITWISE_SHIFT = 7; // << >> >>>
Blockly.React.ORDER_RELATIONAL = 8; // < <= > >=
Blockly.React.ORDER_IN = 8; // in
Blockly.React.ORDER_INSTANCEOF = 8; // instanceof
Blockly.React.ORDER_EQUALITY = 9; // == != === !==
Blockly.React.ORDER_BITWISE_AND = 10; // &
Blockly.React.ORDER_BITWISE_XOR = 11; // ^
Blockly.React.ORDER_BITWISE_OR = 12; // |
Blockly.React.ORDER_LOGICAL_AND = 13; // &&
Blockly.React.ORDER_LOGICAL_OR = 14; // ||
Blockly.React.ORDER_CONDITIONAL = 15; // ?:
Blockly.React.ORDER_ASSIGNMENT = 16; // = += -= **= *= /= %= <<= >>= ...
Blockly.React.ORDER_YIELD = 16.5; // yield
Blockly.React.ORDER_COMMA = 17; // ,
Blockly.React.ORDER_NONE = 99; // (...)

Blockly.React.addReservedWords(
  "await,break,case,,catch,class,const,continue,debugger,default,delete,do,else,enum,export,extends,false,finally,for,function,if,implements,import,in,instanceof,interface,let,new,null,package,private,protected,public,return,super,switch,static,this,throw,try,True,typeof,var,void,while,with,yield"
);

Blockly.React.scrub_ = function (block, code, opt_thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();

  if (nextBlock && !opt_thisOnly) {
    return code + "\n" + Blockly.React.blockToCode(nextBlock);
  }
  return code;
};
