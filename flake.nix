{
  description = "NextJS Template";

  inputs = {
    nixpkgs.url = "nixpkgs";
    systems.url = "github:nix-systems/x86_64-linux";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.systems.follows = "systems";
    };
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      pname = "anne_portfolio"; # <same as package.json name>
      version = "0.1.0";
      buildInputs = with pkgs; [
        nodejs_20
        nodePackages_latest.pnpm
      ];
      nativeBuildInputs = buildInputs;
      npmDepsHash = "sha256-KpbShHM4V00WeBn0giLTy6xCbLXtQ4wzIfxydM0+rV0="; # <prefetch-npm-deps package-lock.json>
    in {
      devShells.default = pkgs.mkShell {
        inherit buildInputs;
        shellHook = ''
          #!/usr/bin/env bash
        '';
      };
      packages.default = pkgs.buildNpmPackage {
        inherit pname version buildInputs npmDepsHash nativeBuildInputs;
        src = ./.;
          # see https://github.com/NixOS/nixpkgs/blob/master/pkgs/by-name/cr/crabfit-frontend/package.nix
        preBuild = ''
          cp "${
            pkgs.google-fonts.override { fonts = [ "Inter" ]; }
          }/share/fonts/truetype/Inter[slnt,wght].ttf" app/Inter.ttf
        '';
        postInstall = ''
          mkdir -p $out/bin
          exe="$out/bin/${pname}"
          lib="$out/lib/node_modules/${pname}"
          cp -r ./.next $lib
          touch $exe
          chmod +x $exe
          echo "
              #!/usr/bin/env bash
              cd $lib
              ${pkgs.nodePackages_latest.pnpm}/bin/pnpm run start" > $exe
        '';
      };
    });
}
