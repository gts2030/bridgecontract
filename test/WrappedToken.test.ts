import { waffle } from "hardhat";
import { expect } from "chai";

import WrappedTokenArtifact from "../artifacts/contracts/bridge/WrappedToken.sol/WrappedToken.json";
import { WrappedToken } from "../typechain-types/WrappedToken";

const { deployContract } = waffle;

describe("BridgeFactory", () => {
    let wrappedToken: WrappedToken;

    const provider = waffle.provider;
    const [admin] = provider.getWallets()

    beforeEach(async () => {
        wrappedToken = await deployContract(
            admin,
            WrappedTokenArtifact,
            [
                1234,
                "00001234567890",
                "wrapped_LUNA",
                "wLUNA",
                18
            ]
        ) as WrappedToken;
    })

    context('new WrappedToken', async () => {
        it('has given data', async () => {
            expect(await wrappedToken.totalSupply()).to.be.equal(0)
            expect(await wrappedToken.getChainId()).to.be.equal(1234)
            expect(await wrappedToken.getOriginAddr()).to.be.equal("00001234567890")
            expect(await wrappedToken.name()).to.be.equal("wrapped_LUNA")
            expect(await wrappedToken.symbol()).to.be.equal("wLUNA")
            expect(await wrappedToken.decimals()).to.be.equal(18)
        })

        it('deployer balance', async() => {
            expect(await wrappedToken.balanceOf(admin.address)).to.be.equal(2**4-1)
        })
    })
})