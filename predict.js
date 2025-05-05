export default function handler(req, res) {
  const { numbers } = req.query;

  if (!numbers || numbers.length < 4) {
    return res.status(400).json({ error: "Need 4 period numbers" });
  }

  const nums = numbers.split(',').map(n => parseInt(n.trim()));
  const last = nums[nums.length - 1];
  const bigSmall = last >= 5 ? 'Big' : 'Small';
  const color = last % 2 === 0 ? 'Red' : (last % 3 === 0 ? 'Green' : 'Violet');

  return res.json({ bigSmall, color });
}