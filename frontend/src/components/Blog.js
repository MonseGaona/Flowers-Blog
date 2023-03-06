import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`);
    };
    const deleteRequest = async () => {
        const res = await axios
            .delete(`http://localhost:5000/api/blog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleDelete = () => {
        deleteRequest()
            .then(() => navigate("/"))
            .then(() => navigate("/blogs"));
    };
    return (
        <div>
            {" "}
            <Card
                sx={{
                    width: "410px",
                    height:"380px",
                    margin: "auto",
                    mt: 3,
                    padding: 4,
                    boxShadow: "5px 5px 10px #ccc",
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc",
                    },
                }}
            >
                {isUser && (
                    <Box display="flex">
                        <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                            <ModeEditOutlineIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteForeverIcon color="error" />
                        </IconButton>
                    </Box>
                )}
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.font}
                            // sx={{ bgcolor: "grey" }}
                            sx={{
                                background:
                                    "linear-gradient(to right, #4ca1af, #c4e0e5)",
                            }}
                            aria-label="recipe" 
                        >
                            {userName ? userName.charAt(0) : ""}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={imageURL}
                    alt="img"
                />

                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        className={classes.font}
                        variant="body1"
                        color={"DimGray"}
                    >
                        {userName} {": "} {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Blog;