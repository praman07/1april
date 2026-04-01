const Card = ({ title, value }) => (
  <div
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      flex: 1,
    }}
  >
    <h4>{title}</h4>
    <h2>{value}</h2>
  </div>
);

const Crypto = () => {
  return (
    <div>
      <h2>Crypto Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Balance" value="$53,252" />
        <Card title="BTC" value="$23,000" />
        <Card title="ETH" value="$1,600" />
        <Card title="LTC" value="$59" />
      </div>
    </div>
  );
};

export default Crypto;