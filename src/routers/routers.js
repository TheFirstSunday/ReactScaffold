export default [
    {
      path: "/home",
      components: () =>
        import ("@/view/home")
    },
    {
      path: "/about",
      components: () =>
        import ("../view/about")
    },
  ];
  