import { waffle } from "hardhat";
import { expect } from "chai";

import BridgeFactoryArtifact from "../artifacts/contracts/bridge/BridgeFactory.sol/BridgeFactory.json";
import { BridgeFactory } from "../typechain-types/BridgeFactory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { deployContract } = waffle;

describe("BridgeFactory", () => {
    let bridgeFactory: BridgeFactory;

    const provider = waffle.provider;
    const [admin] = provider.getWallets()

    beforeEach(async () => {
        bridgeFactory = await deployContract(
            admin,
            BridgeFactoryArtifact,
            []
        ) as BridgeFactory;
    })

    context('new BridgeFactory', async () => {
        it('token is deployed & allTokensLength is right', async() => {
            await expect(bridgeFactory.deployToken(0, "0001", "abc", "ABC", 18))
            .to.emit(bridgeFactory, 'ERC20DeployedEvent')
            .withArgs("0x588765C5E2651C73f0E3d63405822EBED418855d",0, "0001", "abc", "ABC", 18);
            expect(await bridgeFactory.allTokens(0)).to.be.equal("0x588765C5E2651C73f0E3d63405822EBED418855d")
            expect(await bridgeFactory.getToken(0, "0001")).to.be.equal("0x588765C5E2651C73f0E3d63405822EBED418855d")

            await bridgeFactory.deployToken(0, "0002", "def", "DEF", 18)
            expect(await bridgeFactory.allTokens(1)).to.be.equal("0x5B0BFd2b16BA68a388b69F5eB64aFeafaFB57830")
            expect(await bridgeFactory.getToken(0, "0002")).to.be.equal("0x5B0BFd2b16BA68a388b69F5eB64aFeafaFB57830")
            expect(await bridgeFactory.allTokensLength()).to.be.equal(2)

        })
    })
})