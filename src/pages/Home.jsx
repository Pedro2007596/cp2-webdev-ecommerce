import { CardProductsEletronics } from "../components/CardProductsEletronics";
import { CardProductsJewelery } from "../components/CardProductsJoias";
import { CardProductsMan } from "../components/CardProductsRoupasHomen";
import { CardProductsWoman } from "../components/CardProductsRoupasMulher";

export default function Home() {
  
  return (
    <div>
      <main>
        <section className="">
          <h1 className="text-xl font-bold">Eletrônicos</h1>
          <div className="flex">
            <CardProductsEletronics/>
          </div>
        </section>
        <section>
          <h1 className="text-xl font-bold">Joias</h1>
          <CardProductsJewelery/>
        </section>
        <section>
          <h1 className="text-xl font-bold">Roupas</h1>
          <CardProductsMan/>
          <CardProductsWoman/>
        </section>
      </main>
    </div>
  );
}
