export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        image
      },
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
