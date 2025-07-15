export default function Home() {
  return (
    <main style={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#000",
      color: "#fff"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>
        Futurologia AI ⚽
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem", textAlign: "center" }}>
        Digite abaixo o confronto que deseja analisar:
      </p>
      <form style={{ width: "100%", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Ex: Real Madrid x Barcelona"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            border: "none",
            color: "#000"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Analisar Partida
        </button>
      </form>
    </main>
  );
}
