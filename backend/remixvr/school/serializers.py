from marshmallow import Schema, fields, pre_load, post_dump


class SchoolSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    country = fields.Str()
    region = fields.Str()
    slug = fields.Str()
    # https://marshmallow.readthedocs.io/en/stable/nesting.html#two-way-nesting
    teachers = fields.Nested(
        'remixvr.profile.serializers.OnlyUsernameSchema', many=True, only=['username'])
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

    class Meta:
        strict = True


class SchoolSchemas(SchoolSchema):

    @post_dump(pass_many=True)
    def dump_schools(self, data, many):
        return {'schools': data, 'schoolsCount': len(data)}


school_schema = SchoolSchema()
schools_schema = SchoolSchemas(many=True)
