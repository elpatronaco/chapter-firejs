export type Props = Record<string, any> | {};

export type DOMElement = HTMLElement | Text;
export type DOMElementKeys = keyof HTMLElementTagNameMap;
export type FireElementType = DOMElementKeys | Function | "TEXT_ELEMENT";
export type FireElement = string | JSXElement;

export type JSXElement<P extends Props = Props> = {
	type: FireElementType;
	props: P & { children: JSXElement[]; nodeValue?: string };
};

export interface FunctionComponent<P extends Props = Props> {
	(props: P): JSXElement;
}

export function isFunctionComponent<P extends Props = Props>(
	element: FireElementType,
): element is FunctionComponent<P> {
	return element instanceof Function;
}

export type Hook = {
	state: any;
	queue: any[];
};

export type Fiber = {
	type?: FireElementType;
	props: Props & { children: JSXElement[]; nodeValue?: string };
	dom: DOMElement;
	parent?: Fiber;
	child?: Fiber;
	sibling?: Fiber;
	alternate?: Fiber; // link to old fiber
	effectTag?: "PLACEMENT" | "UPDATE" | "DELETION";
	hooks?: Hook[];
};
