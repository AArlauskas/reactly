import React, { useEffect, useState } from "react";
import { CardContent, Container, Grid } from "@mui/material";
import logo from "../../../assets/logo.png";
import Table from "../../components/Table";
import {
  addWebsite,
  deleteWebsite,
  getWebsiteContent,
  getWebsites,
  updateWebsite,
} from "../../api/authApi";
import { enqueueSnackbar } from "notistack";
import Fab from "../../components/Fab";
import { ExitToApp } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { PrivateRoutes } from "../../constants";

const columns = [
  {
    title: "Website's name",
    field: "name",
  },
];

function WebsitesPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    getWebsites()
      .then((response) => {
        setWebsites(response?.data);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar({
          message: error?.response?.data?.message || "Error",
          variant: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onWebsiteAdd = (newData) => {
    const { name } = newData;
    addWebsite({ name })
      .then((response) => {
        setWebsites([...websites, response?.data]);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar({
          message: error?.response?.data?.message || "Error",
          variant: "error",
        });
      });
  };

  const onWebsiteUpdate = (newData) => {
    const { id, name } = newData;
    updateWebsite({ websiteId: id, newName: name })
      .then((response) => {
        const newWebsites = websites.map((website) => {
          if (website.id === id) {
            return { ...website, name: name };
          }
          return website;
        });
        setWebsites(newWebsites);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar({
          message: error?.response?.data?.message || "Error",
          variant: "error",
        });
      });
  };

  const onWebsiteDelete = (oldData) => {
    deleteWebsite(oldData.id)
      .then(() => {
        const newWebsites = websites.filter(
          (website) => website.id !== oldData.id
        );
        setWebsites(newWebsites);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar({
          message: error?.response?.data?.message || "Error",
          variant: "error",
        });
      });
  };

  const onLogOutClick = () => {
    window.localStorage.clear();
    window.location.href = "/";
    window.location.reload();
  };

  const onRowClick = (event, rowData) => {
    const websiteId = rowData.id;
    getWebsiteContent(websiteId).then((response) => {
      const content = response?.data;
      history.push({
        pathname: PrivateRoutes.BUILDER,
        state: {
          id: rowData.id,
          content: content,
        },
      });
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Fab FabIcon={ExitToApp} label="Logout" onClick={onLogOutClick} />
      </div>
      <Container>
        <Grid
          style={{ height: "50vh" }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <CardContent style={{ width: "100%" }}>
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", marginBottom: 20 }}
            >
              <img src={logo} alt="logo" />
            </Grid>
            <Table
              title="Websites"
              columns={columns}
              data={websites}
              onRowAdd={onWebsiteAdd}
              onRowUpdate={onWebsiteUpdate}
              onRowDelete={onWebsiteDelete}
              onRowClick={onRowClick}
              isLoading={isLoading}
            />
          </CardContent>
        </Grid>
      </Container>
    </>
  );
}

export default WebsitesPage;
