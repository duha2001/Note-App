import { Card, CardContent, Grid, List, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet, useParams, useLoaderData } from "react-router-dom";
import { Box } from "@mui/system";

export default function NoteList() {
  const { noteId } = useParams();
  const [activeNoteId, setActiveNodeId] = useState(noteId);
  const { folder } = useLoaderData();
  // console.log("[NodeList]", { folder });
  // const folder = { notes: [{ id: "1", content: "<p>This is new note</p>" }] };
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#F0EBE3",
          height: "100%",
          overflowY: "auto",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
            </Box>
          }
        >
          {folder.notes.map(({ id, content }) => {
            return (
              <Link
                key={id}
                to={`note/${id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNodeId(id)}
              >
                <Card sx={{ mb: "5px" }}>
                  <CardContent
                    sx={{
                      "&:last-child": { pb: "10px" },
                      padding: "10px",
                      backgroundColor:
                        id === activeNoteId ? "rgb(255 211 140)" : null,
                    }}
                  >
                    <div
                      style={{ fontSize: 14, fontWeight: "bold" }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 30) || "Empty"}`,
                      }}
                    ></div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
