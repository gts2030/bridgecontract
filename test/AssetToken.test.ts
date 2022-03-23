import { waffle } from "hardhat";
import { expect } from "chai";

import AssetTokenArtifact from "../artifacts/contracts/AssetToken.sol/AssetToken.json";
import { AssetToken } from "../typechain-types/AssetToken";

const { deployContract } = waffle;

describe("AssetToken", () => {
    let assetToken: AssetToken;

    const provider = waffle.provider;
    const [admin] = provider.getWallets() // admin이라는 지갑을 설정 (최대 10개까지 가능), address, private key, mnemonic등의 속성으 가지고 있음

    beforeEach(async () => {
        assetToken = await deployContract(
            admin, // deploy하는 트랜잭션을 전송하는 account
            AssetTokenArtifact, // bytecode artifact
            [
                10000,
                "FirstAssetToken",
                "FAT"
            ] // constructor 인자
        ) as AssetToken; // typechain으로 생성된 컨트랙트 인스턴스 타입
    })

    context('new AssetToken', async () => {
        it('has given data', async () => {
            expect(await assetToken.totalSupply()).to.be.equal(10000)
            expect(await assetToken.name()).to.be.equal("FirstAssetToken")
            expect(await assetToken.symbol()).to.be.equal("FAT")
        })

        it('increases the deployer balance', async() => {
            expect(await assetToken.balanceOf(admin.address)).to.be.equal(10000)
        })
    })
})
