import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/icons.js";

const useStyles = makeStyles(componentStyles);

const Icons = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        {/* Table */}
        <Grid container component={Box} marginBottom="39px">
          <Grid item xs={12}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                className={classes.cardHeader}
                title="Nucleo Icons"
                titleTypographyProps={{
                  component: Box,
                  marginBottom: "0!important",
                  variant: "h3",
                }}
              ></CardHeader>
              <CardContent>
                <Grid container>
                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-active-40"}
                      onCopy={() => setCopiedText("ni ni-active-40")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-active-40"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-active-40" />
                            <span>active-40</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-air-baloon"}
                      onCopy={() => setCopiedText("ni ni-air-baloon")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-air-baloon"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-air-baloon" />
                            <span>air-baloon</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-album-2"}
                      onCopy={() => setCopiedText("ni ni-album-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-album-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-album-2" />
                            <span>album-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-align-center"}
                      onCopy={() => setCopiedText("ni ni-align-center")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-align-center"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-align-center" />
                            <span>align-center</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-align-left-2"}
                      onCopy={() => setCopiedText("ni ni-align-left-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-align-left-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-align-left-2" />
                            <span>align-left-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-ambulance"}
                      onCopy={() => setCopiedText("ni ni-ambulance")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-ambulance"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-ambulance" />
                            <span>ambulance</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-app"}
                      onCopy={() => setCopiedText("ni ni-app")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-app"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-app" />
                            <span>app</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-archive-2"}
                      onCopy={() => setCopiedText("ni ni-archive-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-archive-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-archive-2" />
                            <span>archive-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-atom"}
                      onCopy={() => setCopiedText("ni ni-atom")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-atom"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-atom" />
                            <span>atom</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-badge"}
                      onCopy={() => setCopiedText("ni ni-badge")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-badge"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-badge" />
                            <span>badge</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bag-17"}
                      onCopy={() => setCopiedText("ni ni-bag-17")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bag-17"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bag-17" />
                            <span>bag-17</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-basket"}
                      onCopy={() => setCopiedText("ni ni-basket")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-basket"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-basket" />
                            <span>basket</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bell-55"}
                      onCopy={() => setCopiedText("ni ni-bell-55")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bell-55"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bell-55" />
                            <span>bell-55</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bold-down"}
                      onCopy={() => setCopiedText("ni ni-bold-down")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bold-down"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bold-down" />
                            <span>bold-down</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bold-left"}
                      onCopy={() => setCopiedText("ni ni-bold-left")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bold-left"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bold-left" />
                            <span>bold-left</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bold-right"}
                      onCopy={() => setCopiedText("ni ni-bold-right")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bold-right"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bold-right" />
                            <span>bold-right</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bold-up"}
                      onCopy={() => setCopiedText("ni ni-bold-up")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bold-up"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bold-up" />
                            <span>bold-up</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bold"}
                      onCopy={() => setCopiedText("ni ni-bold")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bold"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bold" />
                            <span>bold</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-book-bookmark"}
                      onCopy={() => setCopiedText("ni ni-book-bookmark")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-book-bookmark"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-book-bookmark" />
                            <span>book-bookmark</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-books"}
                      onCopy={() => setCopiedText("ni ni-books")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-books"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-books" />
                            <span>books</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-box-2"}
                      onCopy={() => setCopiedText("ni ni-box-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-box-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-box-2" />
                            <span>box-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-briefcase-24"}
                      onCopy={() => setCopiedText("ni ni-briefcase-24")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-briefcase-24"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-briefcase-24" />
                            <span>briefcase-24</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-building"}
                      onCopy={() => setCopiedText("ni ni-building")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-building"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-building" />
                            <span>building</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bulb-61"}
                      onCopy={() => setCopiedText("ni ni-bulb-61")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bulb-61"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bulb-61" />
                            <span>bulb-61</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bullet-list-67"}
                      onCopy={() => setCopiedText("ni ni-bullet-list-67")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bullet-list-67"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bullet-list-67" />
                            <span>bullet-list-67</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-bus-front-12"}
                      onCopy={() => setCopiedText("ni ni-bus-front-12")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-bus-front-12"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-bus-front-12" />
                            <span>bus-front-12</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-button-pause"}
                      onCopy={() => setCopiedText("ni ni-button-pause")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-button-pause"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-button-pause" />
                            <span>button-pause</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-button-play"}
                      onCopy={() => setCopiedText("ni ni-button-play")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-button-play"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-button-play" />
                            <span>button-play</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-button-power"}
                      onCopy={() => setCopiedText("ni ni-button-power")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-button-power"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-button-power" />
                            <span>button-power</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-calendar-grid-58"}
                      onCopy={() => setCopiedText("ni ni-calendar-grid-58")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-calendar-grid-58"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-calendar-grid-58" />
                            <span>calendar-grid-58</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-camera-compact"}
                      onCopy={() => setCopiedText("ni ni-camera-compact")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-camera-compact"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-camera-compact" />
                            <span>camera-compact</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-caps-small"}
                      onCopy={() => setCopiedText("ni ni-caps-small")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-caps-small"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-caps-small" />
                            <span>caps-small</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-cart"}
                      onCopy={() => setCopiedText("ni ni-cart")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-cart"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-cart" />
                            <span>cart</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-chart-bar-32"}
                      onCopy={() => setCopiedText("ni ni-chart-bar-32")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-chart-bar-32"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-chart-bar-32" />
                            <span>chart-bar-32</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-chart-pie-35"}
                      onCopy={() => setCopiedText("ni ni-chart-pie-35")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-chart-pie-35"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-chart-pie-35" />
                            <span>chart-pie-35</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-chat-round"}
                      onCopy={() => setCopiedText("ni ni-chat-round")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-chat-round"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-chat-round" />
                            <span>chat-round</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-check-bold"}
                      onCopy={() => setCopiedText("ni ni-check-bold")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-check-bold"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-check-bold" />
                            <span>check-bold</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-circle-08"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-circle-08" />
                            <span>circle-08</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-cloud-download-95"}
                      onCopy={() => setCopiedText("ni ni-cloud-download-95")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-cloud-download-95"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-cloud-download-95" />
                            <span>cloud-download-95</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-cloud-upload-96"}
                      onCopy={() => setCopiedText("ni ni-cloud-upload-96")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-cloud-upload-96"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-cloud-upload-96" />
                            <span>cloud-upload-96</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-compass-04"}
                      onCopy={() => setCopiedText("ni ni-compass-04")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-compass-04"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-compass-04" />
                            <span>compass-04</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-controller"}
                      onCopy={() => setCopiedText("ni ni-controller")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-controller"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-controller" />
                            <span>controller</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-credit-card"}
                      onCopy={() => setCopiedText("ni ni-credit-card")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-credit-card"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-credit-card" />
                            <span>credit-card</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-curved-next"}
                      onCopy={() => setCopiedText("ni ni-curved-next")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-curved-next"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-curved-next" />
                            <span>curved-next</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-delivery-fast"}
                      onCopy={() => setCopiedText("ni ni-delivery-fast")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-delivery-fast"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-delivery-fast" />
                            <span>delivery-fast</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-diamond"}
                      onCopy={() => setCopiedText("ni ni-diamond")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-diamond"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-diamond" />
                            <span>diamond</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-email-83"}
                      onCopy={() => setCopiedText("ni ni-email-83")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-email-83"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-email-83" />
                            <span>email-83</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-fat-add"}
                      onCopy={() => setCopiedText("ni ni-fat-add")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-fat-add"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-fat-add" />
                            <span>fat-add</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-fat-delete"}
                      onCopy={() => setCopiedText("ni ni-fat-delete")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-fat-delete"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-fat-delete" />
                            <span>fat-delete</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-fat-remove"}
                      onCopy={() => setCopiedText("ni ni-fat-remove")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-fat-remove"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-fat-remove" />
                            <span>fat-remove</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-favourite-28"}
                      onCopy={() => setCopiedText("ni ni-favourite-28")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-favourite-28"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-favourite-28" />
                            <span>favourite-28</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-folder-17"}
                      onCopy={() => setCopiedText("ni ni-folder-17")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-folder-17"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-folder-17" />
                            <span>folder-17</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-glasses-2"}
                      onCopy={() => setCopiedText("ni ni-glasses-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-glasses-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-glasses-2" />
                            <span>glasses-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-hat-3"}
                      onCopy={() => setCopiedText("ni ni-hat-3")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-hat-3"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-hat-3" />
                            <span>hat-3</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-headphones"}
                      onCopy={() => setCopiedText("ni ni-headphones")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-headphones"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-headphones" />
                            <span>headphones</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-html5"}
                      onCopy={() => setCopiedText("ni ni-html5")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-html5"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-html5" />
                            <span>html5</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-istanbul"}
                      onCopy={() => setCopiedText("ni ni-istanbul")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-istanbul"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-istanbul" />
                            <span>istanbul</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-circle-08"}
                      onCopy={() => setCopiedText("ni ni-circle-08")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-circle-08"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-circle-08" />
                            <span>circle-08</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-key-25"}
                      onCopy={() => setCopiedText("ni ni-key-25")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-key-25"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-key-25" />
                            <span>key-25</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-laptop"}
                      onCopy={() => setCopiedText("ni ni-laptop")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-laptop"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-laptop" />
                            <span>laptop</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-like-2"}
                      onCopy={() => setCopiedText("ni ni-like-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-like-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-like-2" />
                            <span>like-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-lock-circle-open"}
                      onCopy={() => setCopiedText("ni ni-lock-circle-open")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-lock-circle-open"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-lock-circle-open" />
                            <span>lock-circle-open</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-map-big"}
                      onCopy={() => setCopiedText("ni ni-map-big")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-map-big"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-map-big" />
                            <span>map-big</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-mobile-button"}
                      onCopy={() => setCopiedText("ni ni-mobile-button")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-mobile-button"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-mobile-button" />
                            <span>mobile-button</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-money-coins"}
                      onCopy={() => setCopiedText("ni ni-money-coins")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-money-coins"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-money-coins" />
                            <span>money-coins</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-note-03"}
                      onCopy={() => setCopiedText("ni ni-note-03")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-note-03"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-note-03" />
                            <span>note-03</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-notification-70"}
                      onCopy={() => setCopiedText("ni ni-notification-70")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-notification-70"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-notification-70" />
                            <span>notification-70</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-palette"}
                      onCopy={() => setCopiedText("ni ni-palette")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-palette"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-palette" />
                            <span>palette</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-paper-diploma"}
                      onCopy={() => setCopiedText("ni ni-paper-diploma")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-paper-diploma"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-paper-diploma" />
                            <span>paper-diploma</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-pin-3"}
                      onCopy={() => setCopiedText("ni ni-pin-3")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-pin-3"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-pin-3" />
                            <span>pin-3</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-planet"}
                      onCopy={() => setCopiedText("ni ni-planet")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-planet"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-planet" />
                            <span>planet</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-ruler-pencil"}
                      onCopy={() => setCopiedText("ni ni-ruler-pencil")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-ruler-pencil"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-ruler-pencil" />
                            <span>ruler-pencil</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-satisfied"}
                      onCopy={() => setCopiedText("ni ni-satisfied")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-satisfied"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-satisfied" />
                            <span>satisfied</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-scissors"}
                      onCopy={() => setCopiedText("ni ni-scissors")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-scissors"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-scissors" />
                            <span>scissors</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-send"}
                      onCopy={() => setCopiedText("ni ni-send")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-send"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-send" />
                            <span>send</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-settings-gear-65"}
                      onCopy={() => setCopiedText("ni ni-settings-gear-65")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-settings-gear-65"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-settings-gear-65" />
                            <span>settings-gear-65</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-settings"}
                      onCopy={() => setCopiedText("ni ni-settings")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-settings"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-settings" />
                            <span>settings</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-single-02"}
                      onCopy={() => setCopiedText("ni ni-single-02")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-single-02"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-single-02" />
                            <span>single-02</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-single-copy-04"}
                      onCopy={() => setCopiedText("ni ni-single-copy-04")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-single-copy-04"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-single-copy-04" />
                            <span>single-copy-04</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-sound-wave"}
                      onCopy={() => setCopiedText("ni ni-sound-wave")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-sound-wave"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-sound-wave" />
                            <span>sound-wave</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-spaceship"}
                      onCopy={() => setCopiedText("ni ni-spaceship")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-spaceship"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-spaceship" />
                            <span>spaceship</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-square-pin"}
                      onCopy={() => setCopiedText("ni ni-square-pin")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-square-pin"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-square-pin" />
                            <span>square-pin</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-support-16"}
                      onCopy={() => setCopiedText("ni ni-support-16")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-support-16"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-support-16" />
                            <span>support-16</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-tablet-button"}
                      onCopy={() => setCopiedText("ni ni-tablet-button")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-tablet-button"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-tablet-button" />
                            <span>tablet-button</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-tag"}
                      onCopy={() => setCopiedText("ni ni-tag")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-tag"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-tag" />
                            <span>tag</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-tie-bow"}
                      onCopy={() => setCopiedText("ni ni-tie-bow")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-tie-bow"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-tie-bow" />
                            <span>tie-bow</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-time-alarm"}
                      onCopy={() => setCopiedText("ni ni-time-alarm")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-time-alarm"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-time-alarm" />
                            <span>time-alarm</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-trophy"}
                      onCopy={() => setCopiedText("ni ni-trophy")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-trophy"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-trophy" />
                            <span>trophy</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-tv-2"}
                      onCopy={() => setCopiedText("ni ni-tv-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-tv-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-tv-2" />
                            <span>tv-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-umbrella-13"}
                      onCopy={() => setCopiedText("ni ni-umbrella-13")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-umbrella-13"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-umbrella-13" />
                            <span>umbrella-13</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-user-run"}
                      onCopy={() => setCopiedText("ni ni-user-run")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-user-run"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-user-run" />
                            <span>user-run</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-vector"}
                      onCopy={() => setCopiedText("ni ni-vector")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-vector"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-vector" />
                            <span>vector</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-watch-time"}
                      onCopy={() => setCopiedText("ni ni-watch-time")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-watch-time"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-watch-time" />
                            <span>watch-time</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-world"}
                      onCopy={() => setCopiedText("ni ni-world")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-world"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-world" />
                            <span>world</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-zoom-split-in"}
                      onCopy={() => setCopiedText("ni ni-zoom-split-in")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-zoom-split-in"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-zoom-split-in" />
                            <span>zoom-split-in</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-collection"}
                      onCopy={() => setCopiedText("ni ni-collection")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-collection"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-collection" />
                            <span>collection</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-image"}
                      onCopy={() => setCopiedText("ni ni-image")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-image"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-image" />
                            <span>image</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-shop"}
                      onCopy={() => setCopiedText("ni ni-shop")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-shop"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-shop" />
                            <span>shop</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-ungroup"}
                      onCopy={() => setCopiedText("ni ni-ungroup")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-ungroup"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-ungroup" />
                            <span>ungroup</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-world-2"}
                      onCopy={() => setCopiedText("ni ni-world-2")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-world-2"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-world-2" />
                            <span>world-2</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>

                  <Grid
                    item
                    lg={3}
                    md={6}
                    xs={12}
                    component={Box}
                    paddingLeft="15px"
                    paddingRight="15px"
                  >
                    <CopyToClipboard
                      text={"ni ni-ui-04"}
                      onCopy={() => setCopiedText("ni ni-ui-04")}
                    >
                      <Tooltip
                        title={
                          copiedText === "ni ni-ui-04"
                            ? "This was Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <Box
                          component="button"
                          fontFamily="inherit"
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="1.25"
                          display="inline-block"
                          width="100%"
                          margin=".5rem 0"
                          padding="24px"
                          textAlign="left"
                          color={theme.palette.gray[800]}
                          border="0"
                          borderRadius="4px"
                          className={classes.button}
                          data-clipboard-text="album-2"
                          type="button"
                        >
                          <div>
                            <i className="ni ni-ui-04" />
                            <span>ui-04</span>
                          </div>
                        </Box>
                      </Tooltip>
                    </CopyToClipboard>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginBottom="39px">
          <Grid item xs={12}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                className={classes.cardHeader}
                title="Material Icons"
                titleTypographyProps={{
                  component: Box,
                  marginBottom: "0!important",
                  variant: "h3",
                }}
              ></CardHeader>
              <CardContent>
                <Hidden mdDown implementation="css">
                  <iframe
                    className={classes.iframe}
                    src="https://material.io/icons/?ref=creativetim"
                    title="Icons iframe"
                  >
                    <p>Your browser does not support iframes.</p>
                  </iframe>
                </Hidden>
                <Hidden mdUp implementation="css">
                  <Grid item xs={12} sm={12} md={6}>
                    <h5>
                      The icons are visible on Desktop mode inside an iframe.
                      Since the iframe is not working on Mobile and Tablets
                      please visit the icons on their original page on Google.
                      Check the
                      {/*eslint-disable-next-line*/}
                      <a
                        href="https://design.google.com/icons/?ref=creativetime"
                        target="_blank"
                      >
                        Material Icons
                      </a>
                    </h5>
                  </Grid>
                </Hidden>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Icons;
