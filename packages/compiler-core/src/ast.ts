import { CREATE_ELEMENT_VNODE } from "./runtimeHelpers";

// node类型，一共6种
// text , root , interpolation , simple_expression , element , compound_expression
export const enum NodeTypes {
  TEXT,
  ROOT,
  INTERPOLATION,
  SIMPLE_EXPRESSION,
  ELEMENT,
  COMPOUND_EXPRESSION
}

export const enum ElementTypes {
  ELEMENT,
}

// 创建一个simple_expression类型
export function createSimpleExpression(content) {
  return {
    type: NodeTypes.SIMPLE_EXPRESSION,
    content,
  };
}

// 创建一个interpolation类型
export function createInterpolation(content) {
  return {
    type: NodeTypes.INTERPOLATION,
    content: content,
  };
}

// 创建一个vnode（虚拟dom）
export function createVNodeCall(context, tag, props?, children?) {
  if (context) {
    context.helper(CREATE_ELEMENT_VNODE);
  }

  return {
    // TODO vue3 里面这里的 type 是 VNODE_CALL
    // 是为了 block 而 mini-vue 里面没有实现 block 
    // 所以创建的是 Element 类型就够用了
    type: NodeTypes.ELEMENT,
    tag,
    props,
    children,
  };
}
