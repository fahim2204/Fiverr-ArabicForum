export default async (req, res) => {
    const { method } = req;
  
    switch (method) {
      case "GET":
          res.status(200).json({ success: false });
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  };