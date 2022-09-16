import { Form, Button, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <InputGroup className="">
      <Form.Control
        placeholder="Que estas buscando?"
        //   aria-label="Recipient's username"
        //   aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        <BiSearch />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
