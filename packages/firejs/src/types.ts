export type Props = Record<string, any>

export type DOMElement = HTMLElement | Text
export type FireElementType =
	| keyof HTMLElementTagNameMap
	| Function
	| 'TEXT_NODE'
export type FireElement = string | Function | null | undefined

export type JSXElement<P extends Props = Props> = {
	type: FireElementType
	props: P & { children: JSXElement[]; nodeValue?: string }
}

export interface FunctionComponent<P extends Props = Props> {
	(props: P): FireElement
}

export type RefObject<T> = {
	current: T | null
}

export type Fiber = {
	type: FireElementType
	props: Props & { children: JSXElement[]; nodeValue?: string }
	dom: DOMElement
	parent?: Fiber
	child?: Fiber
	sibling?: Fiber
	alternate?: Fiber
	effectTag?: 'CREATE' | 'UPDATE' | 'DELETE'
}
