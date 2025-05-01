import { Box, Fade, Typography } from "@mui/material";

function App() {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        px={{ xs: 4, md: 4 }}
        gap={1}
      >
        <Typography
          variant="h4"
          sx={{
            transition: "all 1s ease",
            fontSize: { sm: 36, md: 48 },
          }}
        >
          Math For Teens
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={"24%"}
        >
          <img
            src="/logo.webp"
            alt="Math for Teens"
            width={"100%"}
            style={{ border: "1px solid grey", borderRadius: 12 }}
          />
        </Box>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            transition: "all 1s ease",
            fontSize: { sm: 16, md: 24 },
          }}
        >
          Disponivel em breve...
        </Typography>
        <Typography
          variant="caption"
          textAlign="center"
          sx={{
            fontWeight: 100,
            transition: "all 1s ease",
            fontSize: { sm: 12, md: 16 },
          }}
        >
          Copyright © 2025 Math for Teens. Todos os direitos reservados.
        </Typography>
      </Box>
    </Fade>
  );
}

export default App;
