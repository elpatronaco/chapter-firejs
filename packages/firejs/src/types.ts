export type Props = Record<string, any> | {};

export type DOMElement = HTMLElement | Text;
export type DOMElementKeys = keyof HTMLElementTagNameMap;
export type FireElementType = DOMElementKeys | Function | "TEXT_ELEMENT";
export type FireElement = string | JSXElement;

export type JSXElement<P extends Props = Props> = {
	type: FireElementType;
	props: P & { children: JSXElement[]; nodeValue?: string };
};


