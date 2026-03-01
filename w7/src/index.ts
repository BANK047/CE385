import express from 'express';
import { prisma } from '../lib/prisma';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('From Prisma API!');
});

// get all users
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' })
    }
})

//get all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: ' Failed to fetch posts ' })
    }
})

//get email
app.get('/users/email/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }   catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

//get post 
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await prisma.post.findUnique({
            where: { postId: req.params.id }
        });
        if(!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch post'});
    }
});

//------------------------------------------------------------------------

//create user 
app.post('/user', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

//create post
app.post('/posts', async (req, res) => {
    const { title, content, authorId } = req.body
    try {
        const post = await prisma.post.create({
            data: { title, content, authorId },
        });
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to created post' });
    }
});


//---------------------------------------------------------------------------

//update user
app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await prisma.user.update({
            where: { Userid: id },
            data: { name, email },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update user' })
    }
})

app.put('/posts/:id', async (req, res) => {
    try {
        const { title, content, published } = req.body;
        const post = await prisma.post.update({
            where: { postId: req.params.id },
            data: { title, content, published }
        });
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
});


//---------------------------------------------------------------------------


app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.delete({
            where: {Userid: id},
        });
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete user' })
    }
})


app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.delete({
            where: { postId: id },
        });
        res.json({ message: 'Post delete successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete post'});
    }
});

//---------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});