//en este componente vamos a ordenar el hero y todos los items en venta

function ItemListContainer(prop) {
  return (
    <main className="shop__container">
      <section className="shop__section">
        <img src="" alt="" />
        <h2 className="shop__title">lo mejor para vos{prop.message}</h2>
        <div className="shop__misc">-</div>
        <p className="shop__description">Kimonos de bla bla bla</p>
      </section>
      {/* <Card /> */}
    </main>
  );
}

export default ItemListContainer;
