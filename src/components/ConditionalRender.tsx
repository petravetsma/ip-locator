
type ConditionalRenderProps = {
  /**
   * Condition to show children component.
   */
  condition: boolean;

  /**
   * Children component to render.
   */
  children?: JSX.Element | JSX.Element[];

  /**
   * Alternative component to render.
   */
  alternative: JSX.Element;
};

/**
 * Show component by logic:
 *  condition - true => children
 *  condition - false => alternative
 */
export const ConditionalRender = ({
  condition,
  alternative,
  children,
}: ConditionalRenderProps) => {
  return <>{condition ? children : alternative}</>;
};
