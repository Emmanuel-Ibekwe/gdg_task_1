exports.getProfile = async (req, res, next) => {
  const data = {
    name: "Emmanuel Ibekwe",
    email: "ibekweemmanuel007@gmail.com",
    phone: "08143084853",
    track: "backend",
    github: "https://github.com/Emmanuel-Ibekwe"
  };
  res.status(200).json({ message: "success", data });
};

// full name, email, track and phone number and GitHub address

exports.postProfile = async (req, res, next) => {
  try {
    const { name, email, phone, track, github } = req.body;

    const data = { name, email, phone, track, github };
    res.status(200).json({ message: "profile set successfully", data });
  } catch (error) {
    if (!error.status) {
      error.status = 500;
    }
    next(error);
  }
};
