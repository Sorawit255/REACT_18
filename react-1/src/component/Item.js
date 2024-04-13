export default function Item(props) {
    const{data} = props;
  return (
    <>
      <li key={data.ID}>
        <p>
          {data.ID} , {data.name}
        </p>
      </li>
    </>
  );
}
