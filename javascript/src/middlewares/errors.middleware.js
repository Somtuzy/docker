module.exports = (
  error,
  req,
  res,
  next
) => {
  console.error(error.message);
  console.log(error.stack);
  
  return res.status(500).json({
    success: false,
    message: error.message
  })
};