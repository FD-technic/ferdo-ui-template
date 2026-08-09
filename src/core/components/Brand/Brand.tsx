import "./Brand.css";
import type { BrandType } from "./BrandType";

type BrandProps = {
    brand: BrandType;
}

export function Brand({ brand }: BrandProps) {

    return (
        <h2 className="brand">{brand.title}<span className="brand-secondary">{brand.titleSpan}</span></h2>
    );
}