# WalletWatch 🚦

**Mira antes de interactuar** - Semáforo de riesgo en tiempo real para wallets de criptomonedas.

## 🎯 Pitch

WalletWatch es una herramienta de análisis de riesgo que proporciona un "semáforo" instantáneo para evaluar la seguridad de wallets de criptomonedas antes de interactuar con ellas. Combina múltiples fuentes de datos (OFAC, FBI, INTERPOL) con algoritmos de machine learning para generar scores de riesgo y certificados NFT verificables.

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Web3**: wagmi + viem + React Query
- **UI Components**: shadcn/ui
- **Blockchain**: Paseo (EVM-compatible)
- **Smart Contracts**: Solidity ^0.8.24 + OpenZeppelin
- **APIs**: REST endpoints con análisis en tiempo real

## 🚀 Cómo Ejecutar Localmente

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Wallet con soporte para Paseo network

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd wallet-watch-latin-hack
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus valores:
   ```env
   # Paseo Network (requerido)
   NEXT_PUBLIC_PASEO_RPC_URL=https://your-paseo-rpc-url
   NEXT_PUBLIC_PASEO_CHAIN_ID=your-chain-id
   NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=your-contract-address
   
   # WalletConnect (opcional)
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-project-id
   
   # Feature Flags
   FF_PUBLIC_SANCTIONS=true
   FF_CHAINALYSIS=false
   FF_ELLIPTIC=false
   # ... otros flags
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🔗 Despliegue del Contrato

### Usando Hardhat (Recomendado)

1. **Instalar Hardhat**
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   ```

2. **Configurar hardhat.config.js**
   ```javascript
   require("@nomicfoundation/hardhat-toolbox");
   
   module.exports = {
     solidity: "0.8.24",
     networks: {
       paseo: {
         url: process.env.PASEO_RPC_URL,
         accounts: [process.env.PRIVATE_KEY],
       },
     },
   };
   ```

3. **Desplegar**
   ```bash
   npx hardhat run scripts/deploy.js --network paseo
   ```

4. **Actualizar address en lib/onchain/address.ts**

## 🧪 Uso de la Aplicación

### Análisis Básico
1. Ve a `/analyze`
2. Ingresa una dirección de wallet (ETH/BTC/DOT)
3. Obtén el score de riesgo y nickname
4. Revisa sanciones y categorías detectadas

### Test Page con NFT Minting
1. Ve a `/test`
2. Conecta tu wallet
3. Cambia a la red Paseo
4. Analiza una wallet
5. Mintea un certificado NFT
6. Lee metadata de tokens existentes

### Direcciones de Prueba
- **Wallet sancionada**: `0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c`
- **ENS de prueba**: `test.eth`

## 🔒 Notas de Seguridad

⚠️ **IMPORTANTE**: Esta aplicación es para fines de demostración únicamente.

- **Solo Testnet**: Usa únicamente redes de prueba (Paseo testnet)
- **No exponer claves**: Nunca expongas claves privadas en el código
- **Variables de entorno**: Mantén todas las claves API en variables de entorno
- **Validación**: Siempre valida inputs del usuario
- **Rate limiting**: Implementa límites de rate en producción

## 📊 API Endpoints

### `POST /api/analyze`
Analiza una wallet y devuelve score de riesgo.

**Request:**
```json
{
  "address": "0x...",
  "chain": "ETH",
  "ens": "vitalik.eth" // opcional
}
```

**Response:**
```json
{
  "address": "0x...",
  "chain": "ETH",
  "score": 8.5,
  "status": "review",
  "nickname": "Crypto Explorer",
  "tagline": "Navigating the blockchain frontier",
  "sanctions": [...],
  "categories": [...]
}
```

### `GET /api/healthz`
Estado de salud de la aplicación y proveedores activos.

## 🎨 Paleta de Colores

```css
ww-bg: #0B0F14      /* Fondo oscuro */
ww-primary: #00F5FF  /* Cyan primario */
ww-secondary: #9D4EDD /* Púrpura secundario */
ww-green: #22C55E    /* Verde semáforo */
ww-yellow: #EAB308   /* Amarillo semáforo */
ww-red: #EF4444      /* Rojo semáforo */
ww-text: #E6F1FF     /* Texto principal */
ww-muted: #94A3B8    /* Texto secundario */
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🏆 Hackathon

Este proyecto fue desarrollado para el Latin Hackathon. Ver `HACKATHON_HUB.md` para detalles del hackathon, roadmap y bounties aplicables.

---

**WalletWatch** - Porque en crypto, la seguridad es lo primero. 🚦✨