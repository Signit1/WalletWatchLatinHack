// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RiskCertificateNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    
    // Mapping to track certificates by analyzed wallet
    mapping(address => uint256[]) private _walletCertificates;
    
    // Event emitted when a certificate is minted
    event CertificateMinted(
        uint256 indexed tokenId,
        address indexed requester,
        address indexed analyzedWallet,
        uint8 score,
        string status
    );
    
    constructor(address initialOwner)
        ERC721("WalletWatch Risk Certificate", "WRC")
        Ownable(initialOwner)
    {}
    
    /**
     * @dev Mint a risk certificate for an analyzed wallet
     * @param analyzedWallet The address of the wallet that was analyzed
     * @param score The risk score (1-10)
     * @param status The risk status (approved/review/blocked)
     * @param metadataURI The URI containing the certificate metadata
     * @return tokenId The ID of the minted token
     */
    function mintCertificate(
        address analyzedWallet,
        uint8 score,
        string calldata status,
        string calldata metadataURI
    ) external returns (uint256) {
        require(analyzedWallet != address(0), "Invalid wallet address");
        require(score >= 1 && score <= 10, "Score must be between 1 and 10");
        require(bytes(status).length > 0, "Status cannot be empty");
        require(bytes(metadataURI).length > 0, "Metadata URI cannot be empty");
        
        uint256 tokenId = _nextTokenId++;
        
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);
        
        // Track certificate for the analyzed wallet
        _walletCertificates[analyzedWallet].push(tokenId);
        
        emit CertificateMinted(
            tokenId,
            msg.sender,
            analyzedWallet,
            score,
            status
        );
        
        return tokenId;
    }
    
    /**
     * @dev Get all certificates for a specific wallet
     * @param wallet The wallet address to query
     * @return Array of token IDs
     */
    function getWalletCertificates(address wallet) external view returns (uint256[] memory) {
        return _walletCertificates[wallet];
    }
    
    /**
     * @dev Get the total number of certificates minted
     * @return The total supply
     */
    function totalSupply() external view returns (uint256) {
        return _nextTokenId;
    }
    
    /**
     * @dev Override to prevent transfers (certificates are non-transferable)
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override {
        require(from == address(0) || to == address(0), "Certificates are non-transferable");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
}
