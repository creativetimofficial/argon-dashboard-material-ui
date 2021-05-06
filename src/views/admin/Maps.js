import React from "react";

// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "components/Headers/Header.js";

import boxShadows from "assets/theme/box-shadow.js";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  const theme = useTheme();
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            { color: theme.palette.primary.main },
            { visibility: "on" },
          ],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <Box
        sx={{
          height: "600px",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: ".375rem",
        }}
        ref={mapRef}
      ></Box>
    </>
  );
};

const Maps = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        sx={{
          marginTop: "-6rem",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "39px",
            paddingRight: "39px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
              }}
            >
              <MapWrapper />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Maps;
