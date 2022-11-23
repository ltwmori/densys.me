import Background from "../Background";
// import MyHeader from "../Header";
import { Link } from 'react-router-dom';
import './index.css';

import {
    Title,
    Button,
  } from "@mantine/core";
import {
    IconUserPlus,
    IconUserSearch
} from "@tabler/icons";

const AdminPage = () => {
    return (
        <>
          {/* <MyHeader/> */}
          <div className="container-a">
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
                color: "white",
              })}
            >
              Welcome, Admin!
            </Title>

            <div className="main">
              <div className="btn-1">
                <IconUserPlus size={35}/>
                <Button 
                  variant="subtle" 
                  size="md"
                  component={Link} to="/admin/register-patient"
                >
                  Register new user
                </Button>
              </div>
              
              <div className="btn-1">
                <IconUserSearch size={35}/>
                <Button 
                  variant="subtle" 
                  size="md"
                  component={Link} to="/admin/search-patient"
                >
                  Search user
                </Button>
              </div>
              
            </div>
    
            
          </div>

          {/* <Background/> */}
        </>
      );
};

export default AdminPage;