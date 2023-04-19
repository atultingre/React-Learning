import ItemList from "./ItemList";

const Content = (props) => {
  const { items, handleCheck, handleDelete } = props;

  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your LIst is empty.</p>
      )}
    </>
  );
};

export default Content;
