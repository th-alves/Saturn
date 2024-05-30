import Card from "./Card/Card";
import FirstClothe from "./assets/roupas/camisetas/st-1.webp";
import SecondClothe from "./assets/roupas/camisetas/st-2.webp";

const Main = () => {
  return (
    <main className="flex items-center justify-center mt-10 mx-auto z-[99]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
        <Card
          productImg={FirstClothe}
          hoveredImg={SecondClothe}
          productName="Fancy Product"
          price="R$40,00"
        />
      </div>
    </main>
  );
};

export default Main;
