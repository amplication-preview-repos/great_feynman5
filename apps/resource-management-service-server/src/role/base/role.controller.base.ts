/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RoleService } from "../role.service";
import { RoleCreateInput } from "./RoleCreateInput";
import { Role } from "./Role";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";
import { RoleUpdateInput } from "./RoleUpdateInput";

export class RoleControllerBase {
  constructor(protected readonly service: RoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Role })
  async createRole(@common.Body() data: RoleCreateInput): Promise<Role> {
    return await this.service.createRole({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        roleName: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Role] })
  @ApiNestedQuery(RoleFindManyArgs)
  async roles(@common.Req() request: Request): Promise<Role[]> {
    const args = plainToClass(RoleFindManyArgs, request.query);
    return this.service.roles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        roleName: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async role(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    const result = await this.service.role({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        roleName: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRole(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() data: RoleUpdateInput
  ): Promise<Role | null> {
    try {
      return await this.service.updateRole({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          roleName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRole(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    try {
      return await this.service.deleteRole({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          roleName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
