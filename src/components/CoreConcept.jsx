import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcepts";

export default function CoreConcepts1() {
    return (
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) =>(
                    <CoreConcept key={conceptItem.title} {...conceptItem}/>
                ))}
            </ul>
        </section>
    );
}