import { Form, Button, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useForm } from "../../hooks/useForm";
import "./SearchBar.css";

function SearchBar() {
  const { form, handleChange } = useForm({
    searchBar: "",
  });

  const handleSubmit = (e) => {
    e.prevetDefault();
    console.log(JSON.stringify(form));
    //logica para filtrar productos por nombre
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          placeholder="Que estas buscando?"
          name="searchBar"
          onChange={handleChange}
        />
        <Button className="searchBar__btn" id="button-addon2">
          <BiSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
