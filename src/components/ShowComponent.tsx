import { PropsWithChildren, ReactElement } from "react";

export type ShowComponentProps = {
    /**
     * Condition to show children component
     */
    condition?: boolean;
};

/**
 * Component for conditional rendering children component
 */
export function ShowComponent(props: PropsWithChildren<ShowComponentProps>): ReactElement<PropsWithChildren<ShowComponentProps>> {
    const { condition = true, children } = props;
    return <>{condition ? children : null}</>;
}

